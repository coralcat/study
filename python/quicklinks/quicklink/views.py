from django.views.generic.list import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.detail import DetailView

from django.urls import reverse_lazy
from .models import Quicklink


class QuicklinkListView(ListView):
    model = Quicklink


class QuicklinkCreateView(CreateView):
    model = Quicklink
    fields = ['name', 'url', 'description', 'image']
    success_url = reverse_lazy('list')
    template_name_suffix = '_create'


class QuicklinkDetailView(DetailView):
    model = Quicklink


class QuicklinkUpdateView(UpdateView):
    model = Quicklink
    fields = ['name', 'url', 'description', 'image']
    success_url = reverse_lazy('list')
    template_name_suffix = '_update'


class QuicklinkDeleteView(DeleteView):
    model = Quicklink
    success_url = reverse_lazy('list')