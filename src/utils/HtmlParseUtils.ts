import parse from 'html-dom-parser';

const HtmlParseUtils = {
  getOnlyText: (html: string) => {
    const parsedHtml = parse(html);
    const root = { children: parsedHtml };
    const extractedTexts = [];
    const extractText = (root, acc) => {
      if (root.type === 'text') acc.push(root.data);
      if (root.children) root.children.map(child => extractText(child, acc));
    };
    extractText(root, extractedTexts);
    return extractedTexts.join('');
  },

  getImageUrls: (html: string) => {
    const parsedHtml = parse(html);
    const root = { children: parsedHtml };
    const extractedImageUrls = [];
    const extractImageUrls = (root, acc) => {
      if (root.type === 'tag' && root.name === 'img') acc.push(root.attribs.src);
      if (root.children) root.children.map(child => extractImageUrls(child, acc));
    };
    extractImageUrls(root, extractedImageUrls);
    return extractedImageUrls;
  },

  wrapImageTag: (html: string, wrapperClassName: string) => {
    if (!html || typeof html !== 'string') return;
    return html.replace(/(<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>)/g, `<div class="${wrapperClassName}">$1</div>`);
  },

  normalize: (html: string) => {
    return html.replaceAll(/<br.*\/?>/g, '').replaceAll(/\n/g, '');
  },
};

export default HtmlParseUtils;
