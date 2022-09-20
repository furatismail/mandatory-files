import { AbstractControl } from "@angular/forms";
import { catchError, map, of } from "rxjs";
import { EmailService } from "../email.service";

export interface Valid {
    valid: boolean;
}

export class AsyncCustomValidator {
    static unique(emailService: EmailService) {
        return (control: AbstractControl) => {
            return emailService
                .checkDuplicity(control.value)
                .pipe(
                    map((res: Valid) => {
                        if (res?.valid) {
                            return null
                        }
                        return {
                            isNotUniqueAsync: true
                        }
                    }),
                    catchError((error: any) => {
                        return of({
                            isNotUniqueAsync: true
                        })
                    })
                )
        }
    }
}