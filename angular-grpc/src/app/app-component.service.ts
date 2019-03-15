import {grpc} from '@improbable-eng/grpc-web';

// Import code-generated data structures.
import {BookService} from '../_proto/examplecom/library/book_service_pb_service';
import {QueryBooksRequest, Book, GetBookRequest} from '../_proto/examplecom/library/book_service_pb';

const queryBooksRequest = new QueryBooksRequest();
queryBooksRequest.setAuthorPrefix("Geor");
grpc.invoke(BookService.QueryBooks, {
  request: queryBooksRequest,
  host: 'https://example.com',
  onMessage: (message: Book) => {
    console.log('got book: ', message.toObject());
  },
  onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
    if (code == grpc.Code.OK) {
      console.log('all ok')
    } else {
      console.log('hit an error', code, msg, trailers);
    }
  }
});