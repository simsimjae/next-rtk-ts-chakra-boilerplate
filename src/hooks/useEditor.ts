import { useCallback } from 'react';
import { useState } from 'react';
import FileUtils from '../utils/FileUtils';
import { css } from '@emotion/core';
import { firestorage } from '../configs/firebase';
import { uid } from 'uid';

const useEditor = () => {
  const [isImageUploading, setIsImageUploading] = useState(false);

  const onImageChanged = useCallback(async (file: File, renderImage: (imageUrl: string, altText: string) => any) => {
    setIsImageUploading(true);
    const compressedFile = await FileUtils.compressFile(file);
    const storageRef = firestorage.ref(`/images/${uid(25)}`);
    await storageRef.put(compressedFile);
    const downloadUrl = await storageRef.getDownloadURL();
    renderImage(downloadUrl, '이미지');
    setIsImageUploading(false);
  }, []);

  return { onImageChanged, isImageUploading, setIsImageUploading };
};

export default useEditor;

export const EditorHtmlStyle = css`
  br {
    display: none;
  }
  p + p {
    margin-top: 1em;
  }
  .image-wrapper {
    position: relative;
    width: 100%;
    margin: 16px auto;
    img {
      margin: auto;
      max-width: 100%;
      max-height: 400px;
    }
  }
`;
