import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function lentesRaybanpolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-rayban-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-rayban-polarizados",
    name: "Lentes ray ban polarizados | ¡Con muy buenos descuentos y tu medida!",
    description:
      "Esta sección de la tienda online, expone al mercado un catálogo variado, de lentes ray ban polarizados. Compra ahora no dudes más.",
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
      "@id": "https://www.lentespolaris.store/lentes-rayban-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/rayban.jpg",
      contentUrl: "https://www.lentespolaris.store/rayban.jpg",
      width: "900",
      height: "563",
      caption: "Lentes rayban polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-rayban-polarizados/#breadcrumb",
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
        name: "Lentes rayban polarizados",
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
          Lentes ray ban polarizados | ¡Con muy buenos descuentos y tu medida!
        </title>
        <meta
          name="description"
          content="Esta sección de la tienda online, expone al mercado un catálogo variado, de lentes ray ban polarizados. Compra ahora no dudes más."
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-rayban-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes ray ban polarizados"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Con solo nombrar la marca rayban, conceptos como calidad, diseño
          agradable, durabilidad, versatilidad etc, nos vienen a la memoria. Son
          precisamente esos conceptos, los que definen a los lentes de sol ray
          ban polarizados y los que nos motivaron a promocionar estos útiles e
          indispensables artículos.
        </p>

        <p className="page_body_paragraph">
          Entrando en mas detalle con la descripción de los lentes ray ban
          polarizados, encontramos los modelos más llamativos de la marca y los
          pusimos en una lista. En la que se puede seleccionar cada una, para
          ver más información acerca del producto y tomar la decisión de compra.
        </p>

        <p className="page_body_paragraph">
          Esta marca en su extensa gama de lentes ray ban polarizados, encamina
          estrategias de mercadeo y también su área de diseño, a la plaza de
          producto del género femenino. Artículos que en esta página, se
          muestran detallados en la siguiente lista.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Selección de lentes ray ban mujer y hombre polarizados
          </h2>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Según el tablero de calificaciones de nuestro sistema, estas ray ban
            polarizados están en primer lugar
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Este es un modelo especial de los lentes de sol ray ban polarizados,
            motivo por el cual ocuparon el primer lugar en los sistemas de
            calificación de la web. No te vayas de esta pagina sin antes
            ingresar y ver sus características y funcionalidades.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Cuál es el polarizado Ray-Ban?</h2>
        </div>

        <p className="page_body_paragraph">
          El polarizado con que la marca ray ban ha equipado sus lentes, esta
          calificado para entregar una imagen libre de reflejos y destellos
          imprevistos de luz. Estos lentes proporcionan una comodidad sin igual
          a los ojos, incluso en entornos de luz super brillante.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            A esta referencia se le otorga el reconocimientos de los lentes ray
            ban polarizados con más ventas del mes.
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            En inventario quedan pocas unidades de esta referencia, en rayban
            polarizados. Pues al parecer los clientes ya conocen las
            prestaciones del producto, y casi que no dejan reservas en bodega.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Cómo saber si los lentes Ray-Ban son polarizados?
          </h2>
        </div>

        <p className="page_body_paragraph">
          los lentes de sol ray ban polarizados tienen un distintivi particular
          al lado del logotipo de la marca. ESte distintivo es una p, que indica
          lentes originales ray ban con trataminto de polarizado.
        </p>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesRaybanpolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();


  return {
      props: {
        categoriesList: categoriesList,
    }
  }
}
