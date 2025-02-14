/** @implements {IPDFStream} */
export class PDFWorkerStream implements IPDFStream {
    constructor(msgHandler: any);
    _msgHandler: any;
    _contentLength: any;
    _fullRequestReader: PDFWorkerStreamReader | null;
    _rangeRequestReaders: any[];
    getFullReader(): PDFWorkerStreamReader;
    getRangeReader(begin: any, end: any): PDFWorkerStreamRangeReader;
    cancelAllRequests(reason: any): void;
}
/** @implements {IPDFStreamReader} */
declare class PDFWorkerStreamReader implements IPDFStreamReader {
    constructor(msgHandler: any);
    _msgHandler: any;
    onProgress: any;
    _contentLength: any;
    _isRangeSupported: boolean;
    _isStreamingSupported: boolean;
    _reader: any;
    _headersReady: any;
    get headersReady(): any;
    get contentLength(): any;
    get isStreamingSupported(): boolean;
    get isRangeSupported(): boolean;
    read(): Promise<{
        value: any;
        done: boolean;
    }>;
    cancel(reason: any): void;
}
/** @implements {IPDFStreamRangeReader} */
declare class PDFWorkerStreamRangeReader implements IPDFStreamRangeReader {
    constructor(begin: any, end: any, msgHandler: any);
    _msgHandler: any;
    onProgress: any;
    _reader: any;
    get isStreamingSupported(): boolean;
    read(): Promise<{
        value: any;
        done: boolean;
    }>;
    cancel(reason: any): void;
}
export {};
