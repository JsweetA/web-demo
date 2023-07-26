import request from "@/api/download";

export const getFile = async (params: any = {}) => {
  const data = await request({
    url: params?.url,
  });
  return data;
};
