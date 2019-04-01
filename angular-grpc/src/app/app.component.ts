import { Component, OnInit } from '@angular/core';
import { EchoServiceClient } from 'proto/ts/echo_pb_service';
import { EchoRequest } from 'proto/ts/echo_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-grpc';
  public echoService = new EchoServiceClient('http://localhost:8080');
  ngOnInit(): void {
    const request = new EchoRequest();
    request.setMessage('Hello World!');

    this.echoService.echo(request, {} as any, function(err, response) {
      console.log(response);
    });
  }
}
