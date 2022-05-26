server {
        listen 8085;
        listen [::]:8085;

        server_name 3.144.70.18;

        root /var/www/ln-dashboard/html;
        index index.html;

        location / {
                try_files $uri $uri/ =404;
        }
}