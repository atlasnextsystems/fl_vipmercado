export interface Store {
  id: string;
  name: string;
  city: string;
  address: string;
  cep: string;
  directionsUrl: string;
  embedMapUrl: string;
  phone: string;
  hours: string;
}

export const STORES: Store[] = [
  {
    id: 'salto',
    name: 'Unidade Salto',
    city: 'Salto',
    address: 'Avenida Anita Garibaldi 240, Salto, São Paulo',
    cep: 'CEP 13323-570',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Avenida+Anita+Garibaldi+240,+Salto,+SP',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.2708494691171!2d-47.265783794350284!3d-23.223367011632167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4f0a1925c28b%3A0x80b7389c8481b715!2sSupermercado%20Vip!5e0!3m2!1spt-BR!2sbr!4v1784401296608!5m2!1spt-BR!2sbr',
    phone: '(11) 97167-2012',
    hours: 'Segunda a Sábado: 08:30 às 19:00 | Domingo: Fechado'
  },
  {
    id: 'itu',
    name: 'Unidade Itu',
    city: 'Itu',
    address: 'Av. Eugen Wissmann, 2331/2321 - São Luiz, Itu - SP',
    cep: 'CEP 13304-270',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-23.2806042,-47.2792165&destination_place_id=0x94cf457c8cf5b8a7:0xf529cea225153d48',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.9682269661585!2d-47.28179142360158!3d-23.28060417899381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf457c8cf5b8a7%3A0xf529cea225153d48!2sSupermercado%20VIP10!5e0!3m2!1spt-BR!2sbr!4v1784401059789!5m2!1spt-BR!2sbr',
    phone: '(11) 97167-2012',
    hours: 'Segunda a Sábado: 08:30 às 19:00 | Domingo: Fechado'
  }
];
