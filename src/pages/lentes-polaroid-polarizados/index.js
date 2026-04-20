import React from "react";
import Head from "next/head";

import styles from "./_styles.module.css";
import Services from "../../share-utilities/services/_services";
import MockupService from "../../share-utilities/services/_mockup_service";
import Header from "../../components/header/component";
import TitleCreadCrumbs from "../../components/title_and_breadcrumbs/component";
import ProductCard from "../../components/product-card/component";
import WebDescription from "../../components/web-description/component";
import NotificationSystem from "../../components/notification_system/component";
import Footer from "../../components/footer/component";
import ProductLeft from "../../components/product-card-left/component";

function lentesPolaroidpolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-polaroid-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-polaroid-polarizados",
    name: "Lentes polarizados polaroid | ¡Las versiones más vanguardistas en oferta!",
    description:
      "Te presentamos la lista más buscada de lentes polarizados polaroid en el mercado actual. Ven a conocerla.",
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
      "@id": "https://www.lentespolaris.store/lentes-polaroid-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/polaroid.jpg",
      contentUrl: "https://www.lentespolaris.store/polaroid.jpg",
      width: "900",
      height: "563",
      caption: "Lentes polaroid polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-polaroid-polarizados/#breadcrumb",
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
        name: "Lentes polaroid polarizados",
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
          Lentes polarizados polaroid | ¡Las versiones más vanguardistas en
          oferta!
        </title>
        <meta
          name="description"
          content="Te presentamos la lista más buscada de lentes polarizados polaroid en el mercado actual. Ven a conocerla."
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-polaroid-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes polarizados polaroid"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Los productos de polaroid hablan muy bien de la marca, pues es que
          debido a ellos, esta firma es reconocida a nivel internacional como
          una alternativa muy confiable para buscar lentes de sol. Es que los
          anteojos de sol polaroid tienen todas las funcionalidades y ventajas
          de unas buenas lentes para la protección solar.
        </p>

        <p className="page_body_paragraph">
          Esta página de la web, esta para difundir precisamente las ventajas de
          usar lentes de sol polarizados polaroid. Como efecto de esto, hemos
          armado la listas mas completas de los mencionados artículos, para que
          puedas revisar y escoger la que mas se ajuste a ti.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">Lista de lentes polarizados polaroid</h2>
        </div>

        {props.products && (
          <ul className="products_list">
            {props.products.map((product) => {
              return (
                <div className="products_list_item" key={product._id}>
                  <ProductCard infoProduct={product} />
                </div>
              );
            })}
          </ul>
        )}

        <p className="page_body_paragraph">
          Uno de los flujos de ventas más importantes para la marca polaroid es
          el femenino. Por eso la empresa para sacarle partido a esta
          oportunidad, encamina publicidad y diseños hacia este mercado. Y aquí
          podemos dar una adelanto de algunos ejemplares de lentes polaroid
          polarizados para mujeres.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Por si fuera poco este es el lente polaroid polarizado más votado
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Según la base de datos de ventas de la tienda online, estas lentes de
            sol polarizados polaroid, se vendieron a un mayor número de
            clientes. Debió de ser por su modelo visualmente atractivo, o por su
            razonable precio.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Puntos a favor de los lentes polarizados polaroid
          </h2>
        </div>

        <ul>
          <li className={styles.ul_li_text}>
            Una de las prestaciones de estas lentes, es que son extremadamente
            ligeras. El usuario ni se dará cuenta, que está usando lentes al
            momento de desarrollar sus actividades, así estas impliquen horas de
            uso.
          </li>

          <li className={styles.ul_li_text}>
            Estos lentes además de contar con una tecnología de polarizado bien
            implementada, que excluye los reflejos de la luz. Cuenta ya con la
            protección del estándar uv400, cuyo propósito es cuidar los ojos de
            la radiación, producida por los rayos del sol.
          </li>

        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            No te vallas sin conocer los lentes polaroid polarizados mejor
            estimados
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Con pocos votos de distancia, estas lentes de sol polarizados
            polaroid marcaron la diferencia en la tabla de comparación del
            trimestre. Y los que las compraron no se equivocaron, al llevar este
            producto tan prestante a tan cómodo valor.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesPolaroidpolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("polaroid-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(13);
  const bestProductInfo = await Services.getBestProduct("polaroid-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "polaroid-pola"
  );

  return {
    props: {
      categoriesList: categoriesList,
      category: subcategoryInfo[0],
      products: productsList.body,
      bestProduct: bestProductInfo.body,
      bestSellingProduct: bestSellingProductInfo.body,
    },
  };
}
