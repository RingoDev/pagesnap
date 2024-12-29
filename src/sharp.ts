import sharp from "sharp";
import * as fs from "node:fs";

export async function blur(imagePaths: string[], fileName: string) {
  const blurDataUrls = await Promise.all(
    imagePaths.map((path) => generateBlurDataUrl(path)),
  );

  fs.writeFile(
    `${fileName}.json`,
    JSON.stringify(blurDataUrls, null, 2),
    (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    },
  );
}

export async function generateBlurDataUrl(filePath: string) {
  const buffer = await sharp(filePath)
    .resize({ width: 80 })
    .blur(5)
    .jpeg()
    .toBuffer();
  return {
    file: filePath,
    blurDataUrl: `data:image/jpeg;base64,${buffer.toString("base64")}`,
  };
}
