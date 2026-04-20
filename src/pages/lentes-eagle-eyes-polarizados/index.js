import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function lentesEaglEyespolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-eagle-eyes-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-eagle-eyes-polarizados",
    name: "Lentes de sol eagle eyes polarizados | ¡Los modelos más buscados en oferta!",
    description:
      "Contamos con un magnifico catalofo en cuanto a lentes de sol eagle eyes polarizados a muy buen precio. Visita nuestra tienda",
    inLanguage: "es",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.lentespolaris.store/#website",
      url: "https://www.lentespolaris.store",
      name: "Lentes polarizados",
      description: "Web de información sobre Lentes polarizados",
      inLanguage: "es",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.lentespolaris.store/?s={search_term_string}",
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: "http://schema.org/True",
          valueName: "search_term_string",
        },
      },
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": "https://www.lentespolaris.store/lentes-eagle-eyes-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/eagle.jpg",
      contentUrl: "https://www.lentespolaris.store/eagle.jpg",
      width: "900",
      height: "563",
      caption: "Lentes eagle eyes polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-eagle-eyes-polarizados/#breadcrumb",
      itemListElement: {
        "@type": "ListItem",
        position: "1",
        name: "Home",
        item: {
          "@type": "Thing",
          "@id": "https://www.lentespolaris.store/",
        },
      },
      itemListElement: {
        "@type": "ListItem",
        position: "2",
        name: "Lentes eagle eyes polarizados",
      },
    },
    potentialAction: {
      "@type": "ReadAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.lentespolaris.store/",
      },
    },
  };
  return (
    <main className="page">
      <Head>
        <title>
          Lentes de sol eagle eyes polarizados | ¡Los modelos más buscados en
          oferta!
        </title>
        <meta
          name="description"
          content="Contamos con un magnifico catalofo en cuanto a lentes de sol eagle eyes polarizados a muy buen precio. Visita nuestra tienda"
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-eagle-eyes-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes de sol eagle eyes polarizados"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Qué son los lentes eagle eyes?</h2>
        </div>

        <p className="page_body_paragraph">
          Los lentes de sol eagle eyes polarizados están definidos y
          caracterizados, por implementar la llamada tecnología TriLenium en sus
          lentes. Esta composición de polarizado, entrega una protección
          efectiva en cuanto a rayos UVA, UVB y luz azul se refiere.
        </p>

        <p className="page_body_paragraph">
          Continuando con la presentación de este grandioso producto, hemos
          seleccionado una gran variedad de opciones, para que escojas la que
          más se ajuste a tus necesidades y gustos.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Catalogo lentes para sol eagle eyes polarizados para mujer y hombre
          </h2>
        </div>

        <p className="page_body_paragraph">
          Si eres entusiasta o amante de los lentes de lujo, la marca eagle eyes
          es especialista en la confeccion de este accesorio. Usa estandares de
          manufactura sobresalientes, materias primas amigables y de muy buen
          gusto.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Esta es la opción de los eagle eyes lentes de sol polarizados mejor
            calificada
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Entre los lentes de sol eagle eyes polarizados, te presentamos el
            modelo con mayor puntuación, en opinión post venta. Estos anteojos
            gracias a sus estupendas características son los que más han gustado
            a nuestros clientes.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Qué tan buenos son los lentes eagle eyes?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Según las calificaciones de los compradores que han adquirido unos
          lentes de sol eagle eyes polarizados, coinciden en que son lentes
          caracterizadas por entregar una imagen bien definida y optimizada, en
          lugares al aire libre. Y que también se adaptan rápidamente a los
          cambios de escenario , con presencia o ausencia de luz.
        </p>

        <p className="page_body_paragraph">
          Y que al momento de usarlos por jornadas prolongadas de tiempo,
          entregan una sensación placentera de comodidad, al ser unos accesorios
          elaborados con materias primas livianas y con tecnologías
          perfectamente adaptadas a las curvaturas faciales.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            En este apartado tenemos los lentes de sol eagle eyes polarizados
            más comprados
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            Debido a su llamativo diseño y a su proporción precio calidad, estos
            fueron los lentes de sol eagle eyes que marcaron más ventas en todo
            el año, superando por varias decenas, a muchos modelos de su
            segmento. Estas lentes son sin duda la opción más confiable para
            conocer la marca, si eres usuario primerizo o también para
            fidelizarte en ella si ya eres cliente.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesEaglEyespolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();


  return {
    props: {
      categoriesList: categoriesList,
    },
  };
}
