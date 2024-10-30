from django.urls import path
from . import views

urlpatterns = [
    path('', views.cuidados_pessoais),
    path('calculadora-imc/', views.calculadora_imc, name='calculadora-imc'),
]