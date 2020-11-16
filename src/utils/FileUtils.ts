import imageCompression from 'browser-image-compression';

class FileUtils {
  static compressFile = async (file: File, compressOption?: { maxSizeMB: number; maxWidthOrHeight: number; useWebworker: boolean }) => {
    const fileCompressOptions = compressOption || {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    const compressedFile = (await imageCompression(file, fileCompressOptions)) as File;
    console.log(`압축된 파일 사이즈: ${compressedFile.size / 1024 / 1024} MB`);
    return compressedFile;
  };

  static readFileAsDataURL = async (file?: File | null): Promise<string | null> => {
    if (!file) return Promise.resolve(null);
    const compressedFile = await FileUtils.compressFile(file);
    return imageCompression.getDataUrlFromFile(compressedFile);
  };

  static readFilesAsDataURL = async (files?: FileList | null): Promise<string[] | null> => {
    if (!files || !files.length) return Promise.resolve(null);

    const promises: Promise<string>[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      promises.push(new Promise(resolve => FileUtils.readFileAsDataURL(file).then(dataUri => resolve(dataUri!))));
    }

    return Promise.all(promises).then(dataUris => dataUris);
  };
}

export default FileUtils;
