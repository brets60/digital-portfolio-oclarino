# Script to easily push the portfolio to GitHub for Render deployment
param (
    [string]$RepoUrl
)

if (-not $RepoUrl) {
    Write-Host "Please enter your GitHub repository URL (e.g., https://github.com/username/portfolio.git):" -ForegroundColor Cyan
    $RepoUrl = Read-Host "Repository URL"
}

if (-not $RepoUrl) {
    Write-Host "Error: No repository URL provided." -ForegroundColor Red
    exit 1
}

Write-Host "Setting remote origin to: $RepoUrl" -ForegroundColor Green
git remote remove origin 2>$null
git remote add origin $RepoUrl

Write-Host "Pushing main branch to GitHub..." -ForegroundColor Green
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccessfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Now go to https://dashboard.render.com and connect your repository to deploy." -ForegroundColor Cyan
} else {
    Write-Host "`nPush failed. Please make sure the repository exists on GitHub and you have access." -ForegroundColor Red
}
