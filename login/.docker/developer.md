sudo chmod +x .docker/entrypoint.sh


# no arquivo C:\Windows\system32\drivers\etc\hosts, adicionar a linha abaixo
#> 127.0.0.1    host.docker.internal

# o comando abaixo aponta para o Gatway padrão do Docker
#> extra_hosts:
#>   - 'host.docker.internal: 172.17.0.1'