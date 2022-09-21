import { InjectionToken } from "@angular/core";
import { ApiConfig } from "./api-config.interface";

export const API_CONFIG = 
new InjectionToken<ApiConfig>('API_CONFIG')