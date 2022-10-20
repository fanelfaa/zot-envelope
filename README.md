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