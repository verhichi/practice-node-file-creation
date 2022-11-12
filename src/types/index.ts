export type tCreateFileReqBody = {
  path: string;
  content: string;
};

export type tEditFileReqBody = {
  path: string;
  content: string;
};

export type tDeleteFileReqBody = {
  path: string;
};

export type tReadFileReqBody = {
  path: string;
};
