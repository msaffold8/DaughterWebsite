import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'My Favorties',
  description: 'Hey Friends! Here are the things I love the most. This is where I put everything I really, really like',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Hey Friends! Here are the things I love the most. This is where I put everything I really, really like"
    >
      <div className="space-y-20">
      <ToolsSection title="My Fun Stuff">
  <Tool title="Princess Dress-Up Kit">
    I love dressing up like a princess! My kit has dresses, crowns, and even magic wands.
  </Tool>
  <Tool title="My Big Doll House">
    It's a house for my dolls. We have tea parties and it's so much fun!
  </Tool>
  <Tool title="Little Sewing Machine">
    I make tiny clothes for my dolls with it. It's just like Mommy's but for me!
  </Tool>
  <Tool title="Family Photo Album">
    This book has pictures of my family. I like looking at it and remembering fun times.
  </Tool>
</ToolsSection>
<ToolsSection title="Learning is Fun">
  <Tool title="My ABCs Book">
    This book helps me learn my letters. It has pictures and is really colorful!
  </Tool>
  <Tool title="Counting Beads">
    I use these beads to learn numbers. They are pretty and shiny.
  </Tool>
</ToolsSection>
<ToolsSection title="Adventure Gear">
  <Tool title="Treasure Hunt Map">
    I use this map for pretend treasure hunts in the backyard. X marks the spot!
  </Tool>
</ToolsSection>
<ToolsSection title="Artsy Things">
  <Tool title="Crayons and Markers">
    I use these to draw and color. I have so many colors, even pink and purple!
  </Tool>
  <Tool title="Sticker Collection">
    Stickers are the best! I put them on my drawings and in my sticker book.
  </Tool>
</ToolsSection>

      </div>
    </SimpleLayout>
  )
}
