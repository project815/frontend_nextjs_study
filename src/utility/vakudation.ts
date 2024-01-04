export const CheckValidationFile = (file?: File): boolean => {
  if (typeof file === "undefined") {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  if (!file.type.includes("png") || !file.type.includes("jpeg")) {
    alert("파일이 이미지가 아닙니다.");
    return false;
  }

  return true;
};

// 1gb - 1024 mb
// 1mb - 1024 kb
// 1kb - 1024 b
