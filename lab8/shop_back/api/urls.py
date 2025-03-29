from django.urls import path
from .views import (
    CategoryListView, CategoryDetailView, 
    ProductItemListView, ProductItemDetailView, 
    CategoryProductsView, like_product
)

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('products/', ProductItemListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductItemDetailView.as_view(), name='product-detail'),
    path('categories/<int:id>/products/', CategoryProductsView.as_view(), name='category-products'),
    path('products/<int:pk>/like/', like_product, name='like-product'),
]