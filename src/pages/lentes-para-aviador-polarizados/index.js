import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function lentesAviadorpolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-para-aviador-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-para-aviador-polarizados",
    name: "Lentes aviador polarizados | ¡La colección más reciente en catálogo!",
    description:
      "Tenemos ofertas relámpago para lentes aviador polarizados, no esperes a que se agoten, tenemos todas las tallas en stock. Visitanos",
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
      "@id": "https://www.lentespolaris.store/lentes-para-aviador-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/aviator_p.jpg",
      contentUrl: "https://www.lentespolaris.store/aviator_p.jpg",
      width: "900",
      height: "563",
      caption: "Lentes aviador polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-para-aviador-polarizados/#breadcrumb",
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
        name: "Lentes aviador polarizados",
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
          Lentes aviador polarizados | ¡La colección más reciente en catálogo!
        </title>
        <meta
          name="description"
          content="Tenemos ofertas relámpago para lentes aviador polarizados, no esperes a que se agoten, tenemos todas las tallas en stock. Visitanos"
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-para-aviador-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes aviador polarizados"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          En esta oportunidad queremos dedicar una sección entera de la tienda
          online, para promocionar un producto de excelente diseño,
          confeccionado por varias marcas opticas de nivel global. Los productos
          de los que hablamos son las buscadas lentes aviador polarizados
        </p>

        <p className="page_body_paragraph">
          Ahora queremos exponer mediante un listado cuidadosamente
          seleccionado, una gran variedad de alternativas, para todos los gustos
          y lo más importante para la mayoría de necesidades que demandan
          nuestros clientes.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Catalogo actulizado en lentes aviador polarizados inisex
          </h2>
        </div>

        <p className="page_body_paragraph">
          Si eres entusiasta o amante de los lentes polarizados, múltiples marcas
          aquí presentes, se especializan en la confección de este accesorio.
          Usan estándares de manufactura sobresalientes, materias primas
          amigables y de muy buen gusto.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Este es el modelo de lentes de sol polarizados aviador, mejor
            calificado
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Dentro de las muy buscadas Lentes polarizados aviador, traemos el
            modelo con más alto puntaje después de ventas. Estos lentes debido a
            sus características innovadoras y buena calidad, fueron los
            acreedores al primer puesto en buena calificación.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Damos a conocer los anteojos polarizados aviador que se vendieron
            más en la última temporada
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            Estas polarizados polarizados aviador fueron las que superaron en
            ventas a los otros modelos, dando a entender, que tienen un mejor
            acabado y un diseño más llamativo. Por lo tanto queremos resaltarlas
            en este espacio, para que aproveches sus características
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesAviadorpolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();

  return {
    props: {
      categoriesList: categoriesList,
    },
  };
}
