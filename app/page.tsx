import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowUp, CheckCircle, Mail, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">텔레코드 (TeleCode)</h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          사무실 인터넷 전화 통화 녹음 솔루션
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <Button className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            무료 체험 신청
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            문의하기
          </Button>
        </div>
      </div>
    </main>
  )
}

