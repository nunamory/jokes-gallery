import { Component, OnInit } from "@angular/core";

export interface myData {
  timestamp: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Dashboard";
  data: myData[] = [];

  ngOnInit() {
    // this.data = sampleData.data;
  }

  fetchData() {}
}   
