import { Module } from "@nestjs/common";
import { CountryModuleBase } from "./base/country.module.base";
import { CountryService } from "./country.service";

@Module({
  imports: [CountryModuleBase],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
