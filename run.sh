#!/bin/sh -e

RUNMODE="${1:-start}"

if [ "${RUNMODE}" = "check" ]; then
    /usr/sbin/nginx -t
else
    echo "Starting jibrel-com-promo service, version: `cat /app/version.txt` on node `hostname`"

    dockerize -template /etc/nginx/nginx.tpl.conf:/etc/nginx/nginx.conf

    echo "Ready"

    /usr/sbin/nginx
fi
