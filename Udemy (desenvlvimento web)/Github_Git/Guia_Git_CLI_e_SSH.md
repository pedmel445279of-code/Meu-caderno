# Guia Rápido de Git CLI + SSH

## Configuração inicial

``` bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
git config --list
```

## Criar e clonar

``` bash
git init
git clone <url>
```

## Status

``` bash
git status
git log
git log --oneline --graph --all
git diff
```

## Branches

``` bash
git branch -M (nome da branche): ela altera o nome da brench
git branch nova-branch
git switch nova-branch
git switch -c nova-branch
git checkout nome-branch
git merge nome-branch
git branch -d nome-branch
```

## Commits

``` bash
git add arquivo
git add .
git commit -m "Mensagem"
git commit --amend
git restore arquivo
git restore --staged arquivo
git reset --soft HEAD~1
git reset --hard HEAD~1
```

## Remotos

``` bash
git remote -v
git remote add origin git@github.com:usuario/repositorio.git
git fetch
git pull origin main: puxa alteração do github
git push origin main: sobre pro github
git push -u origin main
```

## Stash

``` bash
git stash
git stash list
git stash pop
```

## Tags

``` bash
git tag
git tag v1.0.0
git push origin v1.0.0
```

## SSH (GitHub)

### Gerar chave

``` bash
ssh-keygen -t ed25519 -C "seu@email.com"
```

### Iniciar agente

``` bash
eval "$(ssh-agent -s)"
```

### Adicionar chave

``` bash
ssh-add ~/.ssh/id_ed25519
```

### Copiar chave pública

Linux:

``` bash
cat ~/.ssh/id_ed25519.pub
```

Windows (PowerShell):

``` powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
```

### Testar conexão

``` bash
ssh -T git@github.com
```

### Alterar remoto HTTPS para SSH

``` bash
git remote set-url origin git@github.com:usuario/repositorio.git
```
