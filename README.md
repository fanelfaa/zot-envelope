## Welcome
Haloo... saya Fandi. Makasih udah mampir.  project ini adalah pekerjaan saya untuk [test skill product engineer (web)](./zot_skill_test_frontend_product_engineer.pdf).
<br/>kalau ada feedback silahkan kirim email ke :
```
fandi.ilham.bb@gmail.com
```
atau wa ke nomor :
```
0822-3041-9331
```

> Have a nice day!!
<br/>

## Login
jika ingin langsung mencoba di [web vercel](https://zot-envelope.vercel.app/) gunakan email dan password berikut
```md
EMAIL=hunter@abyss.com
PASSWORD=plus_ultra
```
jika ingin mencoba di local silahkan copy .env.example ke .env lalu atur email dan password sesuai keinginan
<br/>
<br/>
## Testing
> Pastikan .env sudah ada
### Unit dan Functional Testing
jalankan perintah berikut:
```
npx nx run-many --all --target=test --parallel
```
### End to End Testing
jalankan perintah berikut:
```
npx nx e2e web-e2e --watch
```

<br/>

## Storybook
> Untuk saat ini storybook hanya tersedia untuk ui components

untuk menjalankan gunakan perintah berikut:
```
nx run ui:storybook
```