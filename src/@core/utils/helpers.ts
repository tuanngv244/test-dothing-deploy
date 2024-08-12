import { format, differenceInDays, addDays } from "date-fns";

export const handleURLQueries = (router: any, path: string) => {
  if (Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query);

    return (
      router.asPath.includes(path) &&
      router.asPath.includes(router.query[arr[0]]) &&
      path !== "/"
    );
  }

  return false;
};

export const hasActiveChild = (
  item: any,
  currentURL: string,
  page: string = ""
) => {
  const { children } = item;
  if (!children) {
    return false;
  }
  for (const child of children) {
    if (child.children) {
      if (hasActiveChild(child, currentURL)) {
        return true;
      }
    }
    const childPath = child.path;

    // Check if the child has a link and is active
    if (
      child &&
      childPath &&
      currentURL &&
      (childPath === currentURL ||
        (currentURL.includes(childPath) && childPath !== "/"))
    ) {
      return true;
    }

    if (
      child &&
      childPath &&
      currentURL &&
      (childPath === currentURL ||
        (currentURL.includes("find-out") && childPath.includes("find-out")) ||
        (currentURL.includes("insight") && childPath.includes("insight")) ||
        (currentURL.includes("customer-support") &&
          childPath.includes("customer-support")) ||
        (currentURL.includes("products") && childPath.includes("products")))
    ) {
      return true;
    }
  }

  return false;
};

export const removeChildren = (
  children: any,
  openGroup: any,
  currentActiveGroup: any
) => {
  children.forEach((child: any) => {
    if (!currentActiveGroup.includes(child.title)) {
      const index = openGroup.indexOf(child.title);
      if (index > -1) openGroup.splice(index, 1);

      // @ts-ignore
      if (child.children)
        removeChildren(child.children, openGroup, currentActiveGroup);
    }
  });
};

export const getInitials = (string: any) =>
  string
    .split(/\s/)
    .reduce(
      (response: any, word: string) => (response += word.slice(0, 1)),
      ""
    );

export const getDateRange = (startDate: any, endDate: any) => {
  const days = differenceInDays(endDate, startDate);

  return [...(Array(days + 1).keys() as any)].map((i) =>
    format(addDays(startDate, i), "MM/dd/yyyy")
  );
};

export const sleepAsync = (delay: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

export const isKoreanWord = (input: string) => {
  const match = input.match(
    /[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]/g
  );
  return match ? match.length === input.length : false;
};

export const onlyLettersAndNumbers = (str: string) => {
  return /[a-zA-Z0-9\-]+$/i.test(str);
};

export const truncateStr = (str: string, len: number = 50) => {
  if (!str) return "";

  if (str.length > len) return str.slice(0, len) + "...";

  return str;
};

export const convertToHtml = (tncClobTxt: string) => {
  if (!tncClobTxt) return "";

  let content = tncClobTxt.replace(/&lt;/gi, "<");
  content = content.replace(/&gt;/gi, ">");
  content = content.replace(/&amp;/gi, "&");
  content = content.replace(/&quot;/gi, '"');
  content = content.replace(/&#39;/gi, "'");
  content = content.replace(/&#40;/gi, "(");
  content = content.replace(/&#41;/gi, ")");
  content = content.replace(/&middot;/gi, ".");
  return content;
};

export const exposeStr = (str: string) => {
  if (!str) return "";
  let html = convertToHtml(str);
  //html.replace(/<.*>(.*)<\/.*>/g, '$1')
  return html.replace(/<[^>]+>/g, "");
};

export const styleCssFromModal = (maxWidth = "427px") => {
  return { maxWidth: maxWidth, width: "90vw", margin: "auto" };
};

export const uuidv4 = () => {
  return (1e7 + -1e3 + -4e3 + -8e3 + -1e11)
    .toString()
    .replace(/[018]/g, (c: any) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
};

export const formatPoint = (number: any) => {
  if (!number) return 0;
  return parseFloat(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const convertToSlug = (text: string) => {
  if (!text) return "";

  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

export const copyToClipboard = async (textToCopy: string) => {
  // Navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(textToCopy);
  } else {
    // Use the 'out of viewport hidden text area' trick
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    // Move textarea out of the viewport so it's not visible
    textArea.style.position = "absolute";
    textArea.style.left = "-999999px";

    document.body.prepend(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }
  }
};

export const removeTagTemporary = (content: any, className: any) => {
  const pattern = /(?<=<div.*?class="`${className}`".*?>)(.*?)(?=<\/div>)/g;
  const re = new RegExp(
    `(?<=<div.*?class="${className}".*?>)(.*?)(?=<\/div>)`,
    "gi"
  );
  const result = content
    .replaceAll(
      "image widget. Press Enter to type after or press Shift + Enter to type before the widget",
      ""
    )
    .replaceAll("image widget", "");
  return result.replace(re, "");
};

export const removeImageTagTemporary = (html: string) => {
  if (!html) return "";
  let result = html.replace(/<img[^>]*>/g, "");
  result = result.replace(/<\/?strong>/g, "");
  return result.replace(/style="[^"]*"/g, "");
};

export const replaceHTMLDisplay = (html: string) => {
  if (!html) return "";
  let result = html.replaceAll("<p></p>", "<p>&nbsp;</p>");
  return result;
};

export const filterHtml = (html: string) => {
  return html
    ?.replace(/contenteditable/gi, "text")
    .replace(
      "image widget. Press Enter to type after or press Shift + Enter to type before the widget",
      ""
    )
    .replace(
      "image widget. Press Enter to type after or press Shift + Enter",
      ""
    )
    .replace("to type before the widget", "")
    .replace("image widget", "");
};

export const makeTitle = (slug: string, isCap: boolean = true) => {
  if (!slug) return "";

  let words = slug.split("-");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (i === 0 && isCap) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  return words.join(" ");
};

export const capitalizedInput = (str: string) => {
  return str.replace(/(?:^|\s)\S/g, (a) => {
    return a.toUpperCase();
  });
};

export const filterData = (data: Array<any>) => {
  if (!data) return [];
  return data.map((item) => {
    return { ...item, category: convertToSlug(item.faqCategory) };
  });
};

const toDataURL = async (url: string) => {
  const blob = await fetch(url).then((res) => res.blob());
  return URL.createObjectURL(blob);
};

const downLoadImageJpeg = (img: any, filename: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx: any = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const dataURL = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downLoadFile = async (url: string, filename: string) => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = await toDataURL(url);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadUrlFile = (url: string, filename: string) => {
  if (
    !filename.includes(".png") ||
    !filename.includes(".jpg") ||
    !filename.includes(".jpeg") ||
    !filename.includes(".gif")
  ) {
    downLoadFile(url, filename);
    return;
  }
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = function () {
    downLoadImageJpeg(img, filename);
  };
  img.src = url;
};

export const downloadFileLocal = (file: any) => {
  let a = document.createElement("a");
  a.href = "data:image/png;base64," + file.content;
  a.download = file.fileName + "." + file.docFormat;
  a.click(); //Downloaded file
};

export const chunk = (arr: Array<any>, size: number) => {
  Array.from({ length: Math.ceil(arr.length / size) }, (v: any, i: number) =>
    arr.slice(i * size, i * size + size)
  );
};

export const chunkIntoN = (arr: Array<any>, n: number) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (v: any, i: number) =>
    arr.slice(i * size, i * size + size)
  );
};

export const chunkify = function* (itr: Array<any>, size: number) {
  let chunks = [];
  for (const v of itr) {
    chunks.push(v);
    if (chunks.length === size) {
      yield chunks;
      chunks = [];
    }
  }
  if (chunks.length) yield chunks;
};

export const chunkWithMinSize = (
  arr: Array<any>,
  chunkSize: number,
  minChunkSize: number = 0
) => {
  const remainder = arr.length % chunkSize;
  const isLastChunkTooSmall = remainder < minChunkSize;
  const totalChunks = isLastChunkTooSmall
    ? Math.floor(arr.length / chunkSize)
    : Math.ceil(arr.length / chunkSize);

  return Array.from({ length: totalChunks }, (v: any, i: number) => {
    const chunk = arr.slice(i * chunkSize, i * chunkSize + chunkSize);
    if (i === totalChunks - 1 && isLastChunkTooSmall) {
      chunk.push(...arr.slice(-remainder));
    }
    return chunk;
  });
};

export const formatExpirationDate = (value: string) => {
  const finalValue = value
    .replace(/^([1-9]\/|[2-9])$/g, "0$1/") // 3 > 03/
    .replace(/^(0[1-9]|1[0-2])$/g, "$1/") // 11 > 11/
    .replace(/^([0-1])([3-9])$/g, "0$1/$2") // 13 > 01/3
    .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, "$1/$2") // 141 > 01/41
    .replace(/^([0]+)\/|[0]+$/g, "0") // 0/ > 0 and 00 > 0
    // To allow only digits and `/`
    .replace(/[^\d\/]|^[\/]*$/g, "")
    .replace(/\/\//g, "/"); // Prevent entering more than 1 `/`

  return finalValue;
};

const clearNumber = (value = "") => {
  return value.replace(/\D+/g, "");
};

export const formatCVC = (value: string, cardNumber: string, Payment: any) => {
  const clearValue = clearNumber(value);
  const issuer = Payment.fns.cardType(cardNumber);
  const maxLength = issuer === "amex" ? 4 : 3;

  return clearValue.slice(0, maxLength);
};

export const allowLettersAndNumbers = (str: string): boolean => {
  return /^[A-Za-z0-9]*$/.test(str);
};

export const removeSpecialSign = (str: string) => {
  return str.replace(/[!@#$%^&*`~()_+\-=\[\]{};':"\\|,.<>\/?]+/g, "");
};

export const checkBracket = (str: string): boolean => {
  let regGroup = /\(([^)]+)\)/;
  let regBlock = /{([^}]+)}/;
  return /\[([^\]]+)]/.test(str);
};

export const ipCheck = (str: string): boolean => {
  return /^([1-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([1-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([1-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([1-9]?[0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(
    str
  );
};

export const isScrolledIntoView = (ele: string): any => {
  let docViewTop = window.scrollY;
  let pageBoom = docViewTop + window.innerHeight;

  let visible = false;

  let element = document.querySelector(ele) as HTMLElement;

  if (!element) {
    return {
      isVisible: null,
    } as any;
  }

  let position = element.getBoundingClientRect();
  let elementTop = position.top;
  let elementBottom = position.height;

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    visible = true;
  } else {
    visible = false;
  }

  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    visible = true;
  } else {
    visible = false;
  }

  return {
    // visible: Math.floor(elementTop) <= pageBoom && elementBottom >= docViewTop,
    visible,
    isChecked: position.top < pageBoom,
    isVisible: element.offsetTop < pageBoom,
  } as any;
};

export const checkDomainGo = (domainExt: string) => {
  return /\.go$/.test(domainExt);
};

export const hours: any[] = Array(24)
  .fill(24)
  .map((e, index) => {
    let nexIdx = index + 0;
    return {
      text: `${nexIdx <= 9 ? "0" + nexIdx : nexIdx}`,
      value: `${nexIdx <= 9 ? "0" + nexIdx : nexIdx}`,
      type: "h",
    };
  });

export const minutes: any[] = Array(60)
  .fill(60)
  .map((e, index) => {
    let nexIdx = index + 0;
    return {
      text: `${nexIdx <= 9 ? "0" + nexIdx : nexIdx}`,
      value: `${nexIdx <= 9 ? "0" + nexIdx : nexIdx}`,
      type: "m",
    };
  });

export const days: any[] = Array(30)
  .fill(30)
  .map((e, index) => {
    let nexIdx = index + 1;
    return {
      text: `${nexIdx <= 9 ? "0" + nexIdx : nexIdx}`,
      value: `${nexIdx <= 9 ? "0" + nexIdx : nexIdx}`,
      type: "d",
    };
  });

export const months: any[] = Array(12)
  .fill(12)
  .map((e, index) => {
    let nexIdx = index + 1;
    return {
      text: `${nexIdx <= 9 ? "0" + nexIdx : nexIdx}`,
      value: `${nexIdx <= 9 ? "0" + nexIdx : nexIdx}`,
      type: "mo",
    };
  });

const handleListNode = (node: any) => {
  if (node?.children) {
    return {
      id: node.id,
      name: node.name,
      collapse: [...(node?.children?.map(handleListNode) || [])],
    };
  }

  return {
    id: node.id,
    name: node.name,
  };
};

export const filterTrees = (list: Array<any>) => {
  const arr: Array<any> = [];

  for (let item of list) {
    arr.push(handleListNode(item));
  }

  return arr;
};

export const generateTrees = (list: Array<any>) => {
  const hashTable = Object.create(null);
  const dataTree = [];

  for (let item of list) {
    hashTable[item.id] = { ...item, children: [] };
  }

  for (let item of list) {
    if (item.parentId)
      hashTable[item.parentId].children.push(hashTable[item.id]);
    else dataTree.push(hashTable[item.id]);
  }

  return dataTree;
};
