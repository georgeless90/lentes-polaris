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

function lentesKingsevenpolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-kingseven-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-kingseven-polarizados",
    name: "Lentes de sol polarizados kingseven | ¡En oferta todos los modelos de la última colección!",
    description:
      "Te ofrecemos en esta página de la tienda online un amplio listado de lentes de sol polarizados kingseven. Ingresa aquí para descubrirlos.",
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
      "@id": "https://www.lentespolaris.store/lentes-kingseven-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/kingseven.jpg",
      contentUrl: "https://www.lentespolaris.store/kingseven.jpg",
      width: "900",
      height: "563",
      caption: "Lentes kingseven polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-kingseven-polarizados/#breadcrumb",
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
        name: "Lentes kingseven polarizados",
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
          lentes de sol polarizados kingseven | ¡En oferta todos los modelos de
          la última colección!
        </title>
        <meta
          name="description"
          content="Te ofrecemos en esta página de la tienda online un amplio listado de lentes de sol polarizados kingseven. Ingresa aquí para descubrirlos."
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-kingseven-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes de sol polarizados kingseven"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Para artículos y accesorios relacionados con el deporte, la marca
          kingseven es una de las más comercialmente reconocidas a nivel local e
          internacional. Uno de estos accesorios, que además es muy útil, son
          los lentes de sol polarizados kingseven, de las cuales hablaremos en
          toda esta página web.
        </p>

        <p className="page_body_paragraph">
          No hay nada más placentero para hacer que las acostumbradas rutas en
          bicicleta, y al mismo tiempo poder disfrutar de los paisajes y la
          naturaleza del entorno. Y todo esto puede ser posible, si se usan unas
          buenas Lentes polarizados kingseven. Que además pueden representar un
          factor de seguridad, al relajar y proteger la vista de los rayos del
          sol y de las impurezas del aire.
        </p>

        <p className="page_body_paragraph">
          Y era de esperar que la marca kingseven, dedicara esfuerzos en
          comprender las tendencias y necesidades actuales del flujo mercantil
          femenino. Y hoy en esta sección de la web, hemos de resaltar, el
          esfuerzo de la marca, promocionando los lentes polarizados kingseven
          para mujer.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            lentes de sol polarizados kingseven para mujer y hombre en inventario
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
            El sistema informo que estos fueron kingseven lentes polarizados con
            más opiniones positivas
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Desde nuestro punto de vista, coincidimos con los compradores al
            decir que estos son los lentes de sol kingseven polarizados, con
            mejor relación precio funcionalidades. Estas lentes incluyen
            características de un producto de alta gama y no son tan costosas.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Caracteristicas unicas de los lentes kingseven polarizados
          </h2>
        </div>

        <ul>
          <li className={styles.ul_li_text}>
            los lentes de sol polarizados kingseven, cuentan con lentes hechos de
            policarbonato, material que las hace resistentes a escenarios que
            involucran arena o cualquier tipo de polución en el ambiente. Además
            estos cristales fueron diseñados para cubrir una amplia extensión
            facial, para así brindar mayor protección, sin llegar a ser
            incómodos ni pesados.
          </li>

          <li className={styles.ul_li_text}>
            Y no menos importante, estos lentes integran un escudo para rayos
            UVA y UVB. Que gracias a su filtro UV400, reduce en un 100% los
            efectos perjudiciales de la radiación proveniente del sol.
          </li>
        </ul>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Te presentamos los lentes kingseven polarizados más vendido del año
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Dejando el contador de productos mejor vendidos de la temporada en
            un punto alto. Este artículo fue el predilecto, por nuestros
            clientes al momento de comprar.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesKingsevenpolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("kingseven-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(7);
  const bestProductInfo = await Services.getBestProduct("kingseven-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "kingseven-pola"
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
