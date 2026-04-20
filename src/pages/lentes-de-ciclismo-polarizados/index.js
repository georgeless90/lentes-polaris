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

function lentesCiclismopolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-de-ciclismo-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-de-ciclismo-polarizados",
    name: "Lentes ciclismo polarizados | ¡Con muy buenos descuentos y a tu medida!",
    description:
      "Esta sección de la tienda online, expone al mercado un catálogo variado, de lentes ciclismo polarizados. Compra las tuyas ahora.",
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
      "@id": "https://www.lentespolaris.store/lentes-de-ciclismo-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/ciclismo_p.jpg",
      contentUrl: "https://www.lentespolaris.store/ciclismo_p.jpg",
      width: "900",
      height: "563",
      caption: "Lentes ciclismo polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-de-ciclismo-polarizados/#breadcrumb",
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
        name: "Lentes ciclismo polarizados",
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
          Lentes ciclismo polarizados | ¡Con muy buenos descuentos y a tu
          medida!
        </title>
        <meta
          name="description"
          content="Esta sección de la tienda online, expone al mercado un catálogo variado, de lentes ciclismo polarizados. Compra las tuyas ahora."
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-de-ciclismo-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes ciclismo polarizados"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          En esta página los lentes ciclismo polarizados son los actores
          principales. Y decidimos dedicar un espacio en especial para estos
          productos, porque nos consta que a logrado ganarse un lugar
          privilegiado en la industria de del ciclismo, con trabajo arduo y
          sobre todo con saber incluir las opiniones y necesidades de sus
          clientes, y reflejarlas en esos artículos.
        </p>

        <p className="page_body_paragraph">
          Ahora para entrar en más detalle, las listas con los lentes ciclismo
          polarizados que escogimos a continuación, resaltan la calidad y buen
          gusto con que estos accesorios fueron elaborados.
        </p>

        <p className="page_body_paragraph">
          Multiples marcas brindan gran variedad de modelos para el mercado
          femenino, por esta razón las queremos exponer a continuación:
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Modelos en catálogo para lentes de sol polarizados ciclismo de mujer
            y hombre
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
            Esta es la alternativa de los cuadra cinturones con mejor
            apreciación
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            El artículo de los lentes polarizados ciclismo que presentó mayor
            puntuación, en recomendaciones fueron estas lentes. Los clientes que
            las compraron coincidieron, que es el modelo que más prestaciones
            ofrece y a buen precio.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Cuándo usar Lentes polarizados?</h2>
        </div>

        <p className="page_body_paragraph">
          Es recomendado por las tendencias de uso de los mismos usuarios,
          ponerse Lentes polarizados cuando se están desarrollando actividades
          que implican un contacto directo con el reflejo del sol. Estas
          actividades pueden ser el ciclismo, la pesca y la conducción.
        </p>

        <p className="page_body_paragraph">
          En cada una de estas actividades la luz puede ser reflejada en el
          agua, o en superficies planas y causar un malestar ocular. Incomodidad
          que puede solucionarse, con el filtro lumínico que proponen los
          anteojos polarizados.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            En esta sección traemos los lentes de sol polarizados ciclismo más
            compradas
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Con un amplio respaldo en ventas y casi cero devoluciones. Estos
            lentes polarizados ciclismo, se posicionaron en el primer lugar de
            la tabla de artículos más vendidos.
          </p>
        </div>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesCiclismopolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("ciclismo-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(1);
  const bestProductInfo = await Services.getBestProduct("ciclismo-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "ciclismo-pola"
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
