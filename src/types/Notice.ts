export interface Notice {
    _id: string;
    title: string;
    body: string;
    date: string;
    count:number;
    profileImg:string;
  }
  
  export interface NoticesResponse {
    notices: Notice[];
  }
  
  export interface NoticeResponse {
    notice: Notice;
  }