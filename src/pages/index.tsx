import { GetStaticProps } from 'next'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | g.obraz</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Bem vindo</span>
          <h1>Gestão de Obras Simplificado</h1>
          <p>
            Obter acesso <br />
            <span>por {product.amount} mês</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/ContentHome.svg" alt="Homens construindo" />
      </main>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1K0BikKJOojcO9tieUFoka57')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'decimal',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24hours
  }
}