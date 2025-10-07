import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, CheckCircle, Eye, EyeOff, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginForm({
  isSignUp,
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  showPassword,
  setShowPassword,
  loading,
  error,
  focused,
  setFocused,
  handleSubmit,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-600">
            {isSignUp ? "Join thousands of job seekers" : "Sign in to continue your journey"}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-5 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-700"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isSignUp && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <User className={`w-5 h-5 ${focused === "username" ? "text-gray-900" : "text-gray-400"}`} />
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocused("username")}
                onBlur={() => setFocused(null)}
                className={`w-full rounded-xl border-2 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:outline-none ${
                  focused === "username" ? "border-gray-900 shadow-md" : "border-gray-200"
                }`}
                placeholder="johndoe"
                required={isSignUp}
              />
            </motion.div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Mail className={`w-5 h-5 ${focused === "email" ? "text-gray-900" : "text-gray-400"}`} />
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={`w-full rounded-xl border-2 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:outline-none ${
                  focused === "email" ? "border-gray-900 shadow-md" : "border-gray-200"
                }`}
                placeholder="you@example.com"
                required
              />
              {email.length > 4 && email.includes("@") && (
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute right-3 top-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </motion.div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Lock className={`w-5 h-5 ${focused === "password" ? "text-gray-900" : "text-gray-400"}`} />
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                className={`w-full rounded-xl border-2 px-4 py-3 pr-12 text-gray-900 placeholder-gray-400 transition-all focus:outline-none ${
                  focused === "password" ? "border-gray-900 shadow-md" : "border-gray-200"
                }`}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {!isSignUp && (
            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-gray-900 font-medium hover:text-gray-700">
                Forgot password?
              </Link>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full rounded-xl py-3.5 bg-gray-900 text-white font-semibold shadow-lg hover:bg-gray-800 disabled:opacity-60 transition-all"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {isSignUp ? "Creating account..." : "Signing in..."}
              </div>
            ) : (
              <>{isSignUp ? "Create Account" : "Sign In"}</>
            )}
          </motion.button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i}.jpg`}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
              ))}
            </div>
            <div className="text-sm text-gray-700">
              Trusted by <span className="font-semibold">100,000+</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}