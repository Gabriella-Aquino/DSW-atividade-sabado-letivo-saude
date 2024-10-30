from django.shortcuts import render

def cuidados_pessoais(request):
  return render(request, 'index.html')

def calculadora_imc(request):
  return render(request, 'calculadora.html')
