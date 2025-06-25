"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Bot, Send, AlertTriangle, CheckCircle } from "lucide-react"

export function AIAgentIntegration() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setResponse("")

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on the transaction pattern analysis, this appears to be a legitimate transaction with a 92% confidence score. The user has made similar purchases in the past from this merchant.",
        "This transaction has been flagged as potentially fraudulent with a 78% confidence score. Multiple high-value transactions from different locations in a short time period detected.",
        "The login attempt appears suspicious with an 85% confidence score. The user is logging in from a new device and location that doesn't match their typical behavior pattern.",
      ]

      setResponse(responses[Math.floor(Math.random() * responses.length)])
      setLoading(false)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="mr-2 h-5 w-5 text-primary" />
          AI Agent Console
        </CardTitle>
        <CardDescription>Interact directly with the AI fraud detection system</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Describe a transaction or activity to analyze..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={4}
            className="resize-none"
          />

          {response && (
            <div className="p-4 border rounded-lg bg-muted/50">
              <div className="flex items-start space-x-2">
                {response.includes("legitimate") ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                )}
                <div>
                  <h4 className="font-medium">AI Analysis Result</h4>
                  <p className="text-sm mt-1">{response}</p>
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} disabled={!query.trim() || loading} className="w-full">
          {loading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="mr-2 h-4 w-4" />
              Analyze
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
