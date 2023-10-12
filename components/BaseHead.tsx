import Head from "next/head"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"

const BaseHead = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const url = `${process.env.NEXT_PUBLIC_APP_URL}${router.asPath}`;
  
  return (
    <>
      <Head>
        <link rel="canonical" href={url} />
        <title>Cantave.K</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="title" content={'Cantave.K'} />
        <meta name="description" content={"Près d’un an après sa grande tournée nationale « Follow Cantave K », l’humoriste Kerven Cantave, dit Cantave K, lance son propre « Comedy club ». Baptisé « Cantave K Comedy Club »."}/>
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={'Cantave.K'} />
        <meta property="og:description" 
        content={"Près d’un an après sa grande tournée nationale « Follow Cantave K », l’humoriste Kerven Cantave, dit Cantave K, lance son propre « Comedy club ». Baptisé « Cantave K Comedy Club »."}
        />
        <meta property="og:image" content={'/logo.png'} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={'Cantave.K'} />
        <meta property="twitter:description" 
        content={'Près d’un an après sa grande tournée nationale « Follow Cantave K », l’humoriste Kerven Cantave, dit Cantave K, lance son propre « Comedy club ». Baptisé « Cantave K Comedy Club ».'} 
        />
        <meta property="twitter:image" content={'/logo.png'} />
      </Head>
      {children}
    </>
  )
}

export default BaseHead