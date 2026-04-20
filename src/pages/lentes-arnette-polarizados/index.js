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

function lentesArnettepolarizados(props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.lentespolaris.store/lentes-arnette-polarizados/#webpage",
    url: "https://www.lentespolaris.store/lentes-arnette-polarizados",
    name: "Lentes arnette polarizados | ¡A precios competitivos y de excelente calidad!",
    description:
      "Para la marca de lentes y lentes arnette, te presentamos una sección exclusiva de la tienda. Ven a descubrirla.",
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
      "@id": "https://www.lentespolaris.store/lentes-arnette-polarizados/#primaryimage",
      inLanguage: "es",
      url: "https://www.lentespolaris.store/arnette.jpg",
      contentUrl: "https://www.lentespolaris.store/arnette.jpg",
      width: "900",
      height: "563",
      caption: "Lentes arnette polarizados",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": "https://www.lentespolaris.store/lentes-arnette-polarizados/#breadcrumb",
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
        name: "Lentes arnette polarizados",
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
          Lentes arnette polarizados | ¡A precios competitivos y de excelente
          calidad!
        </title>
        <meta
          name="description"
          content="Para la marca de lentes y lentes arnette, te presentamos una sección exclusiva de la tienda. Ven a descubrirla."
        />
        <link
          rel="canonical"
          href="https://www.lentespolaris.store/lentes-arnette-polarizados"
        />
        
      </Head>
      <Header allCategories={props.categoriesList} />
      <TitleCreadCrumbs
        title={"Lentes arnette polarizados"}
        breadCrumbs={props.category.breadCrumbs}
      />
      <div className="page_body">
        <p className="page_body_paragraph">
          Bienvenidos a la página encargada de difundir las bondades de un
          producto de inigualable calidad, elaborado por la reconocida firma
          arnette. El producto innovador al cual hacemos referencia, son los muy
          buscados lentes arnette polarizados.
        </p>

        <p className="page_body_paragraph">
          Dando continuidad con la presentación del mencionado producto, hemos
          puesto a disposición de nuestros clientes una selecta variedad,
          clasificada por género, para poder satisfacer todos los gustos y
          necesidades.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Lista selecta de lentes arnette polarizados para mujer y hombre
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

        <p className="page_body_paragraph">
          Para los fanáticos de los lentes de sol polarizados arnette, la marca
          es sin duda, una de las más sobresalientes en la manufactura de este
          articulo. Pues ha demostrado ofrecer unos productos muy bien logrados
          y con altos estándares de calidad.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Aquí mencionamos los anteojos mejor votados de los lentes arnette
            polarizados
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestProduct} />

          <p className="page_body_paragraph">
            Un producto para resaltar de los lentes arnette polarizados es este.
            Pues cuenta con retoques de acabado fino, y están pensados para
            durar mucho tiempo, considerando la calidad de sus materiales de
            fabricación. Revisa ahora mismo sus características, para confirmar
            de primera persona por que fue el escogido por los usuarios.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">¿Qué tal es la marca Arnette?</h2>
        </div>

        <p className="page_body_paragraph">
          La marca arnette tiene alrededor de 30 años de haber sido fundada.
          Esta firma se originó en 1992, y desde entonces su horizonte en el
          mercado, han sido las tendencias urbanas Dirigido hacia los
          compradores de las eras modernas y juveniles. Ofreciendo a sus
          clientes diseños frescos, inclinados hacia la moda citadina.
        </p>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            Conoce los lentes de sol polarizados arnette más compradas por los
            clientes
          </h2>
        </div>

        <div className="best_and_selleing_product_cont">
          <ProductLeft infoProduct={props.bestSellingProduct} />
          <p className="page_body_paragraph">
            Para dar una descripción breve del por qué estos lentes, fueron los
            que obtuvieron un mayor número de ventas. Podemos afirmar que estan
            elaborados, con materias primas cuidadosamente escogidas de primera.
            Y resaltamos también que en la realidad, su diseño se ve igual o
            mejor, que el expuesto en las fotos.
          </p>
        </div>

        <div className="page_body_subtitle">
          <h2 className="subtitle_text">
            ¿Qué tan buenos son los lentes Arnette?
          </h2>
        </div>

        <p className="page_body_paragraph">
          Los lentes arnette son conocidos ya internacionalmente como unos de
          los mejores del mercado. Las versiones y modelos de lentes que produce
          la firma arnette, están pensadas para suplir una necesidad en
          específico.
        </p>

        <p className="page_body_paragraph">
          En el caso de los lentes arnette polarizados, la empresa ofrece un
          producto efectivo, que en verdad proteje los ojos de la luz y los
          reflejos molestos del entorno. Todo esto es gracias a la acertada
          implementación de la tecnología polarizada en sus lentes y a sus
          excelentes materiales de fabricación.
        </p>

        <WebDescription />
        <NotificationSystem />
      </div>
      <Footer />
    </main>
  );
}

export default lentesArnettepolarizados;

export async function getServerSideProps() {
  const categoriesList = await MockupService.getAllCategories();
  const productsList = await Services.listByCategoryName("arnette-pola");
  const subcategoryInfo = await MockupService.getSubcategoryById(9);
  const bestProductInfo = await Services.getBestProduct("arnette-pola");
  const bestSellingProductInfo = await Services.getBestSellingProduct(
    "arnette-pola"
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
