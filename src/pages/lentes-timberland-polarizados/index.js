import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";

function lentesTimberlandpolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-timberland-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-timberland-polarizados",
    name: "Lentes polarizados timberland | ¡Tenemos un catálogo conformado por las mejores versiones de la marca!",
    description:
      "A disposición de nuestros clientes, ya tenemos en inventario los últimos modelos de los lentes polarizados timberland. Ingresa ahora, para ver las nuevas características.",
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
      "@id": "https://www.lentespolaris.store/lentes-timberland-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/timberland.jpg",
      contentUrl: "https://www.lentespolaris.store/timberland.jpg",
      width: "900",
      height: "563",
      caption: "Lentes timberland polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-timberland-polarizados/#breadcrumb",
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
        name: "Lentes timberland polarizados",
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
          Lentes polarizados timberland | ¡Tenemos un catálogo conformado por
          las mejores versiones de la marca!
        </title>
        <meta
          name="description"
          content="A disposición de nuestros clientes, ya tenemos en inventario los últimos modelos de los lentes polarizados timberland. Ingresa ahora, para ver las nuevas características."
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-timberland-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes polarizados timberland"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Los usuarios que han comprado la marca, dan una referencia muy
          positiva en cuanto a sus artículos deportivos. Entre ellos están, las
          lentes de sol polarizados timberland, que sinceramente cuentan con un
          diseño trabajado y con materiales de primera calidad.
        </p>

        <p className="page_body_paragraph">
          Realmente se nota el esfuerzo que timberland, ha impreso en sus
          productos. Pues por algo sera, que tiene ya tantos clientes
          fidelizados. Y cada vez que saca una colación de productos nuevos,
          tienen el mismo buen recibimiento de parte de los usuarios.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Colección de lentes polarizados timberland para mujer y hombre
          </h2>
        </div>


        <p className="page_body_paragraph">
          Timberland es una de las marcas que con solo escucharla o leerla,
          inmediatamente se asocia a productos frescos y elegantes. Como muestra
          de esto, esta página hará mención de algunos modelos de lentes
          timberland polarizados, resaltando sus características más
          importantes.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            La puntuación de favoritismo de estos lentes de sol polarizados
            timberland, fue la más alta.
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">

          <p className="page_body_paragraph">
            Se reconoce este modelo de lentes polarizados timberland como el
            favorito, después de que los usuarios lo probaron. Y esto no es poca
            cosa, porque nos indica que el producto cumplio con lo prometido y
            que sus funcionalidades si fueron acertadas.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Fortalezas a recalcar de la marca y de sus lentes timberland
            polarizados
          </h2>
        </div>

        <ul>
          <li className={styles.ul_li_text}>
            El plástico utilizado para la fabricación de los lentes de sol
            polarizados timberland, es un 35% biológico. Propuesta pensada por
            la marca, para contribuir con el medio ambiente y a su vez, brindar
            al usuario menos peso en el accesorio.
          </li>

          <li className={styles.ul_li_text}>
            El 100% de los elementos metálicos, como tornillos y bisagras con
            que se elaboraron los lentes timberland polarizados no contienen
            plomo.
          </li>

          <li className={styles.ul_li_text}>c</li>
        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Referencia más vendida en lentes de sol polarizados timberland
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <p className="page_body_paragraph">
            De todos los modelos de lentes polarizados timberland, este es el que
            percibe mejor la mente de los usuarios, y lo terminaron comprando.
            Estamos convencidos, que fue por su imagen elegante y materiales
            consistentes. Si quieres saber más de las características, ingresa
            aquí.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesTimberlandpolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();


  return {
    props: {
      categoriesList: categoriesList,
    },
  };
}
