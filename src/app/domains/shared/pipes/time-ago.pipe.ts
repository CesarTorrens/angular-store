import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance, formatDistanceToNow } from 'date-fns'
import { ptBR, es } from 'date-fns/locale'

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    const date = new Date(value)
    const today = new Date()
    return formatDistanceToNow( date, {
      addSuffix: true,
		locale: es
    })
  }

}
