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

function lentesDuberypolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-dubery-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-dubery-polarizados",
    name: "Lentes dubery polarizados | ¡Todos los modelos para escoger a buen precio!",
    description:
      "sAprovecha los increíbles descuentos que tenemos en la sección de lentes dubery polarizados para todos los gustos. Entra a la pagina para ver más.",
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
      "@id": "https://www.lentespolaris.store/lentes-dubery-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/dubery.jpg",
      contentUrl: "https://www.lentespolaris.store/dubery.jpg",
      width: "900",
      height: "563",
      caption: "Lentes dubery polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-dubery-polarizados/#breadcrumb",
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
        name: "Lentes dubery polarizados",
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
          Lentes dubery polarizados | ¡Todos los modelos para escoger a buen
          precio!
        </title>
        <meta
          name="description"
          content="Aprovecha los increíbles descuentos que tenemos en la sección de lentes dubery polarizados para todos los gustos. Entra a la pagina para ver más."
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-dubery-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes dubery polarizados"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Las marcas de lentes mencionadas en esta página web, son marcas
          idóneas para buscar y encontrar productos ópticos de muy buena
          calidad, pero sobre todo a precios competitivos. Esta página está
          dedicada en resaltar las características y ventajas de estos
          productos.
        </p>

        <p className="page_body_paragraph">
          Queremos dedicar una sección completa de esta tienda online, a ofrecer
          y resaltar las características de las dubery Lentes polarizados, porque
          sabemos que es una de las mejores opciones del mercado.
        </p>

        <p className="page_body_paragraph">
          Dubey también ofrece para el género femenino, opciones de dubery
          lentes polarizados con estilo llamativo. Productos para tener en
          cuenta a la hora de revisar, calidad, precio y lo más importante
          confiabilidad.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            lentes dubery polarizados para mujer y hombre en catálogo
          </h2>
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

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Resaltamos los lentes de sol dubery polarizados mejor calificado por
            los usuarios
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Entre las dubery Lentes polarizados, estas fueron las que sacaron el
            mayor número de calificaciones favorables, con la estimación de 4.4
            estrellas de 5 posibles.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Qué es mejor lentes de sol polarizados o normales?
          </h2>
        </div>

        <p className="page_body_paragraph">
          En cuanto a prestaciones y beneficios los lentes polarizados son
          recomandadas, si se desea unos lentes que escuden a los ojos y la piel
          que los acompaña de la radiacion solar. Y su vez los anteojos
          polarizados reducen drasticemente el espuerzo visual en ambientes con
          mucha luz directa o reflectante.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Te presentamos los lentes dubery polarizados más vendido del periodo
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Facilitamos aqui el producto más vendido, si hablamos de lentes de
            sol dubery polarizados. Este fue el producto líder en ventas en su
            segmento, y en esta tienda la hemos traído para ti.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesDuberypolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("dubery-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(11);
  const bestProductInfo = await Services.getBestProduct("dubery-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "dubery-pola"
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
