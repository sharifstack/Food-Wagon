"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FoodAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const greetedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(Boolean(localStorage.getItem("accessToken")));
    }
  }, []);
  // greet once
  if (open && !greetedRef.current) {
    greetedRef.current = true;
    setMessages([
      {
        role: "ai",
        text: `👋 Hi! I'm your Food Assistant.

You can try:
• Burger under 300
• Spicy food
• Pizza
• Light lunch`,
      },
    ]);
  }

  const sendMessage = async (text) => {
    const messageToSend = text || input;
    if (!messageToSend.trim() || loading) return;

    setLoading(true);
    setInput("");

    setMessages((p) => [...p, { role: "user", text: messageToSend }]);

    try {
      const res = await fetch("/api/ai/food-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await res.json();

      setMessages((p) => {
        const last = p[p.length - 1];
        if (last?.role === "ai" && last.text === data.reply) return p;
        return [...p, { role: "ai", text: data.reply }];
      });
    } catch {
      setMessages((p) => [
        ...p,
        { role: "ai", text: "Sorry 😕 Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  const quickOptions = [
    { label: "🍔 Burger", value: "Suggest a burger from the menu" },
    { label: "🍕 Pizza", value: "Suggest a pizza from the menu" },
    { label: "🌶 Spicy", value: "Suggest spicy food from the menu" },
    { label: "💸 Under 300", value: "Suggest food under 300 taka" },
  ];

  const clearChat = () => {
    setMessages([]);
    greetedRef.current = false;
  };

  return (
    <>
      {/* Floating Launcher */}
      <motion.button
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0px rgba(255,138,0,0.4)",
            "0 0 18px rgba(255,138,0,0.7)",
            "0 0 0px rgba(255,138,0,0.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full 
             bg-gradient-to-br from-orange-500 to-orange-600 
             text-white shadow-xl flex items-center justify-center"
      >
        <span
          className="absolute inline-flex h-full w-full rounded-full 
                 bg-orange-400 opacity-20 animate-ping"
        ></span>
        <span className="text-xl">🍔</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-[360px] rounded-2xl bg-white shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 
                bg-gradient-to-r from-orange-500 to-orange-400 text-white"
            >
              <div className="font-semibold tracking-wide">
                🍔 Food Assistant
              </div>

              <div className="flex items-center gap-3">
                {/* Clear chat */}
                <button
                  onClick={clearChat}
                  title="Clear chat"
                  className="text-white/80 hover:text-white transition text-sm border p-1 cursor-pointer"
                >
                  Clear Chat
                </button>

                {/* Close */}
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white transition "
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="relative h-72 overflow-y-auto px-4 py-3 space-y-3 bg-orange-50/40">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "ml-auto bg-orange-500 text-white"
                      : "bg-white shadow"
                  }`}
                >
                  {m.text}
                </div>
              ))}

              {/* 🔒 Login required overlay */}
              {!isLoggedIn && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10">
                  <div className="text-center space-y-3">
                    <div className="text-lg font-semibold text-gray-800">
                      🔒 Login Required
                    </div>
                    <p className="text-sm text-gray-600">
                      Please login to use Food Assistant
                    </p>
                    <Link
                      href="/login"
                      className="inline-block bg-orange-500 hover:bg-orange-600 
                     text-white px-5 py-2 rounded-full text-sm transition"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t bg-white px-3 py-2 flex items-center gap-2">
              <input
                disabled={!isLoggedIn}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  isLoggedIn
                    ? "Type food, budget or taste…"
                    : "Login to use Food Assistant"
                }
                className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                disabled={!isLoggedIn || loading}
                onClick={() => sendMessage()}
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-full text-sm"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
