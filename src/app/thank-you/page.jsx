import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my adventures.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I’ll send you an email anytime I have anything fun to share."
    />
  )
}
