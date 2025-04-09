import React, { useState } from "react";
const baseUrl = "https://image-resizer-cloud-api.akamaized.net/image";
export const constructImageUrl = (
  imgId: string,
  aspectRatio: string,
  width: number,
  updatedTime: string
): string => {
  return `${baseUrl}/${imgId}/${aspectRatio}.jpg?width=${width}&updatedTime=${updatedTime}&dt=Web`;
};
