from django.urls import path
from .views import QuicklinkListView, QuicklinkCreateView, QuicklinkUpdateView, QuicklinkDetailView, QuicklinkDeleteView


urlpatterns = [
    path('', QuicklinkListView.as_view(), name='list'),
    path('create/', QuicklinkCreateView.as_view(), name='create'),
    path('update/<int:pk>', QuicklinkUpdateView.as_view(), name='update'),
    path('detail/<int:pk>', QuicklinkDetailView.as_view(), name='detail'),
    path('delete/<int:pk>', QuicklinkDeleteView.as_view(), name='delete'),

]