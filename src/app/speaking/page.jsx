import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Stories',
  description:
    'Hey! I have stories and videos about my tea parties, my toys, my dog Bruno, and the fun stuff I do. They are super cool. Lets read together!',
}

export default function Speaking() {
  return (
    <SimpleLayout
  title="Guess what? I'm going to tell you all about my fun stories and adventures!"
  intro="Hi! I've got stories about my tea parties, my dollhouse, my doggy Bruno, and all the super fun things I do. They're really, really fun. Let's read them together!"
>
  <div className="space-y-20">
    <SpeakingSection title="My Tea Party Stories">
      <Appearance
        href="#"
        title="The Great Garden Tea Party Adventure"
        description="I had a tea party in the garden with Bruno and all my dolls. We had pretend tea and cookies, and even the birds came to visit!"
        event="My Backyard, Last Saturday"
        cta="Read story"
      />
      <Appearance
        href="#"
        title="Bruno's Birthday Bash"
        description="It was Bruno's birthday! We had a special party with a toy cake and hats. Bruno got a new chew toy and we all played games."
        event="My Living Room, Bruno's Birthday"
        cta="Read story"
      />
    </SpeakingSection>
    <SpeakingSection title="Fun With Toys">
      <Appearance
        href="#"
        title="The Day My Dolls Came to Life"
        description="One day, I played a game where all my dolls came to life. We went on a big adventure around the house to find hidden treasure!"
        event="Imagination Land, Last Week"
        cta="Read story"
      />
      <Appearance
        href="#"
        title="Building the Biggest Block Tower"
        description="I tried to build the tallest tower ever with my blocks. It reached all the way up to the ceiling! But then... oops! It fell over."
        event="Playroom Chronicles, Yesterday"
        cta="Read story"
      />
    </SpeakingSection>
  </div>
</SimpleLayout>

  )
}
