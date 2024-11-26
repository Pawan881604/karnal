'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronUp } from 'lucide-react'

export default function Index() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop
    setShowBackToTop(scrollTop > 300)
  }

  const scrollToTop = () => {
    document.getElementById('privacy-policy-top')?.scrollIntoView({ behavior: 'smooth' })
  }

  const policyItems = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our website using cookies and similar technologies."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to send you marketing communications (if you've opted in), to monitor and analyze trends and usage, to detect and prevent fraudulent transactions and other illegal activities, and to personalize your experience on our website."
    },
    {
      title: "Information Sharing and Disclosure",
      content: "We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also share information when we believe it's necessary to comply with the law, to protect our rights and safety, or to protect the rights and safety of others."
    },
    {
      title: "Data Retention",
      content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When we no longer need to use your information, we will remove it from our systems or anonymize it."
    },
    {
      title: "Your Rights and Choices",
      content: "Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. You can update your account information at any time by logging into your account settings. You may also opt out of receiving promotional communications from us by following the instructions in those messages."
    },
    {
      title: "Security",
      content: "We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this privacy policy from time to time. If we make significant changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this privacy policy or our practices, please contact us at privacy@karnalwebtech.com or by mail at: Karnal Web Tech, 123 Web Dev Street, Karnal, Haryana 132001, India."
    }
  ]

  return (
    <ScrollArea className="h-[calc(100vh-4rem)]" onScrollCapture={handleScroll}>
      <div className="container mx-auto px-4 py-8" id="privacy-policy-top">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        <Card>
          <CardHeader>
            <CardTitle>Karnal Web Tech Privacy Policy</CardTitle>
            <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              At Karnal Web Tech, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {policyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        {showBackToTop && (
          <motion.div
            className="fixed bottom-4 right-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Button onClick={scrollToTop} size="icon" variant="outline">
              <ChevronUp className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </ScrollArea>
  )
}