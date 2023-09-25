/* eslint-disable @next/next/no-img-element */
import BreadCrumbs from '@/components/bread-crumbs'
import Layout from '@/layouts'

const About = () => {
  return (
    <Layout>
      <section className="my-10 md:my-14 pt-16">  
        <div className="container mx-auto w-full px-2 md:px-7">
          <BreadCrumbs/>
        </div>
      </section>
      <section className="mb-16 -mt-4">
        <div className="container mx-auto w-full px-2 md:px-7">
          <img
            width="600"
            height="450"
            className="responsive__img w-full rounded-lg max-w-full h-96 object-cover"
            src={'/Rectangle-2-1-2.png'}
            alt={""}
          />
        </div>
      </section>
      <section className='pb-16'>
        <div className="container mx-auto w-full px-7 max-w-3xl">
          <div className="2xl:px-20 min-h-screen ">
            <div>
              <div className="bard text-lg text-gray-600 dark:text-gray-200">
                <div className="intro">
                  Cantave K, de son vrai nom Cantave Kerven, est l’un des plus talentueux humoriste, acteur et comédien de sa génération. Amoureux-passionné-fou de l’humour et de la comédie, Il a abandonné ses études en médecines pour étudier l’art dramatique et l’humour à ACTE (Ecole d’Art Dramatique) afin de réaliser son plus grand rêve. Un virement à 360 degrés qui n’a pas du tout été facile notamment pour sa famille, son entourage, et surtout pour lui: faire de l’humour dans un pays aussi triste et incertain comme Haiti? Quelle blague !
                </div>
                {/* <div 
                set:html={sanityPortableText(post.body[astroI18n.langCode])} 
                className="prose lg:prose-xl dark:prose-invert"
                /> */}
                <div className="prose lg:prose-xl dark:prose-invert">
                  <p>Cantave K, de son vrai nom Cantave Kerven, est l’un des plus talentueux humoriste, acteur et comédien de sa génération. Amoureux-passionné-fou de l’humour et de la comédie, Il a abandonné ses études en médecines pour étudier l’art dramatique et l’humour à ACTE (Ecole d’Art Dramatique) afin de réaliser son plus grand rêve. Un virement à 360 degrés qui n’a pas du tout été facile notamment pour sa famille, son entourage, et surtout pour lui: faire de l’humour dans un pays aussi triste et incertain comme Haiti? Quelle blague !
                  </p>

                <p>Malgré la pression d’un avenir se dessinant à pas lent devant lui, il n’a jamais baissé les bras. Et s’est accroché de toutes ses forces à sa mission qui est de faire du rire le meilleur moyen de toucher les sens et les consciences.
                </p>

                <p> 
                  Fraichement sorti de l’école d’humour, après la présentation de son spectacle de fin d’études en Décembre 2020, il joue sur plusieurs scènes partout à Port-au-Prince. Et alors qu’il se produit un jour, Gessica Généus assistait au spectacle. Cantave K en profite pour faire une plaisanterie à propos de la réalisatrice. Une plaisanterie qui mènera à une proposition de film: à la fin du spectacle, Gessica Généus lui demande de jouer dans son premier long métrage, Freda. Et dans le rôle de Moïse, Cantave K fera ses premiers pas dans le cinéma. Ce rôle l’emmènera au Festival de Cannes en France où le film a été sélectionné dans la catégorie “Un certain regard”.
                </p>

                <p> Revenu au pays, 2021 a été “l’année de révélation de Cantave K”. Impossible de passer à côté de lui sur les réseaux sociaux. Ses personnages autant que ses sketchs sont accrocheurs et se propagent sur la toile à grande vitesse. Ces vidéos les unes les plus amusantes que les autres. Mais aussi, très particulières. Car, non seulement, elles font rire à l’unanimité toute la toile mais aussi, la conscientisent: du pure génie. Instagram, Facebook, Tiktok, Youtube ces vidéos font le buzz et marchent bien. Parodiant avec brio la réalité haïtienne, Cantave fait rire ses 107 000 abonnés Instagram en s’inspirant de la réalité. Chacun de ses personnages, qu’il s’agisse de Socrate ou encore du “raketè” ont leur formule pour amuser le public. Et l’on s’accorde tous pour dire que Cantave K est l’un des meilleurs humoristes de sa génération.
                </p>


                <p> En Mai 2022, il a lancé la première édition de sa tournée et Ateliers de formation humoristiques baptisée “Follow Cantave K”, Considérée comme la toute première tournée de “Stand Up” en Haiti depuis 1804. Un succès à en mourir de rires et de pleurs. Réalisée dans plusieurs villes du pays notamment Carrefour, Saint-Marc, Cap-Haitien, Jacmel, Jeremie… Cantave K a fait découvrir mais aussi vivre dans toute sa dimension subversive et extra-large ce que c’est l’humour à ses milliers de fans venus l’assister dans ses spectacles. Il a aussi partagé avec plus d’une centaine de jeunes dans la capitale et en province son savoir en faisant des ateliers de formation.
                  </p>

                <p> Cantave K continue de travailler au jour le jour pour représenter Haiti internationalement dans le domaine de l’humour.
                  </p>

                <p> Il rêve de lancer le tout premier Comedy Club et le plus grand festival d’humour en Haiti.</p>

                <p>QUE L’HUMOUR SOIT AVEC VOUS </p>
                </div>

                <div className="rounded-md bg-primary-100">

                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About