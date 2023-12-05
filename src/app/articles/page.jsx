import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import Adventure from "./adventure.jpg"
import Image from 'next/image'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between my-8 md:my-12">
        <div className="md:flex-1 md:pl-6">
          <Image src={Adventure} alt="Adventure" className="rounded-lg" />
        </div>
        <div className="md:flex-1">
          <h1 className="text-3xl font-bold">Guess what? Im going to tell you all about my fun stories and adventures!</h1>
          <p className="mt-4 text-lg">
          
  Hi! I have stories about my tea parties, my dollhouse, my doggy Bruno, and all the super fun things I do. Theyre really, really fun. Lets read them together!
          </p>
        </div>
      </div>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
