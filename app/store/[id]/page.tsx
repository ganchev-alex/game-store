import HomeNavigation from "@/components/home_page_components/primary_carousel/HomeNavigation";

import styles from "./Product.module.scss";
import { IGameResult } from "@/utility/interfaces/IGameResult";
import Gallery from "@/components/product_page_components/gallery/Gallery";
import Description from "@/components/product_page_components/description/Description";
import Additions from "@/components/product_page_components/additions/Additions";

const getProductData = async function (productId: string) {
  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games/${productId}?key=${process.env.API_KEY}`,
      { cache: "force-cache" }
    );

    const responseData = await response.json();
    if (response.ok) {
      return responseData as IGameResult;
    } else {
      return undefined;
    }
  } catch {
    return undefined;
  }
};

const getProductScreenshots = async function (productId: string) {
  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games/${productId}/screenshots?key=${process.env.API_KEY}`,
      { cache: "force-cache" }
    );

    const responseData = await response.json();
    if (response.ok) {
      return responseData.results as {
        id: number;
        image: string;
        width: number;
        height: number;
      }[];
    } else {
      return [] as {
        id: number;
        image: string;
        width: number;
        height: number;
      }[];
    }
  } catch {
    return [] as {
      id: number;
      image: string;
      width: number;
      height: number;
    }[];
  }
};

const getProductTrailers = async function (productId: string) {
  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games/${productId}/movies?key=${process.env.API_KEY}`,
      { cache: "force-cache" }
    );

    const responseData = await response.json();
    if (response.ok) {
      return responseData.results.splice(0, 2) as {
        id: number;
        name: string;
        preview: string;
        data: {
          "480": string;
          max: string;
        };
      }[];
    } else {
      return [] as {
        id: number;
        name: string;
        preview: string;
        data: {
          "480": string;
          max: string;
        };
      }[];
    }
  } catch {
    return [] as {
      id: number;
      name: string;
      preview: string;
      data: {
        "480": string;
        max: string;
      };
    }[];
  }
};

const getProductAdditions = async function (productId: string) {
  try {
    const response = await fetch(
      `${process.env.API_ROOT}/games/${productId}/additions?key=${process.env.API_KEY}`,
      { cache: "force-cache" }
    );

    const responseData = await response.json();
    if (response.ok) {
      return responseData.results as IGameResult[];
    } else {
      return [] as IGameResult[];
    }
  } catch {
    return [] as IGameResult[];
  }
};

export default async function Product({ params }: { params: { id: string } }) {
  const [productData, screenshots, trailers, additions] = await Promise.all([
    getProductData(params.id),
    getProductScreenshots(params.id),
    getProductTrailers(params.id),
    getProductAdditions(params.id),
  ]);

  return (
    <>
      <HomeNavigation customTopOffset={5} customWidth={87.5} />
      {productData && (
        <main className={styles.main}>
          <section className={styles["main__primary"]}>
            <Gallery
              title={productData.name}
              screenshots={screenshots.map((s) => {
                return { ...s, type: "screenshot" };
              })}
              trailers={trailers.map((t) => {
                return { ...t, type: "trailer" };
              })}
            />
            <Description
              description={productData.description_raw}
              genres={productData.genres.map((g) => g.name)}
              lastUpdated={productData.updated}
            />
            {additions.length > 0 && (
              <Additions
                additions={additions}
                fallBackImage={productData.background_image}
              />
            )}
          </section>
          <aside className={styles["main__aside"]}></aside>
        </main>
      )}
    </>
  );
}
